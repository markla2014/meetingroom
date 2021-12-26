package com.simat.meetingroom.dao;

import cn.meetingroom.model.User;

import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

public class UserDao extends BaseDao{
    public boolean addUser(User user){
        String sql = "insert into user(username,password,email,phone,role) values(?,?,?,?,?)";
        Object[] obj = {user.getUsername(),user.getPassword(),user.getEmail(),user.getPhone(),0};
        int i = this.executeUpdate(sql,obj);
        this.closeResource();
        if(i>0){
            return true;
        }
        return false;
    }

    public boolean delUser(long id){
        String sql = "delete from user where id = ?";
        Object[] obj = {id};
        int i = this.executeUpdate(sql,obj);
        this.closeResource();
        if(i>0){
            return true;
        }
        return false;
    }

    public boolean alterUser(User user){
        String sql = "update user set username = ? , password = ? , email = ? , phone = ? where id = ?";
        Object[] obj = {user.getUsername(),user.getPassword(),user.getEmail(),user.getPhone(),user.getId()};
        int i = this.executeUpdate(sql,obj);
        this.closeResource();
        if(i>0){
            return true;
        }
        return false;
    }

    public boolean updateReadTime(long id){
        String sql = "update user set noticelastread = current_timestamp() where id = ?";
        Object[] obj = {id};
        int i = this.executeUpdate(sql,obj);
        this.closeResource();
        if(i>0){
            return true;
        }
        return false;
    }

    public Timestamp getUnreadTime(long id){
        String sql = "select noticelastread from user where id = ?";
        Object[] obj = {id};
        rs = this.ExecuteQuery(sql,obj);
        try {
            while (rs.next()){
                return rs.getTimestamp(1);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        finally {
            this.closeResource();
        }
        return null;
    }

    public User find(String colName, Object value){
        String sql = "select * from user where "+colName+" = ?";
        Object[] obj = {value};
        rs = this.ExecuteQuery(sql,obj);
        try {
            while (rs.next()){
                long id = rs.getInt(1);
                String username = rs.getString(2);
                String password = rs.getString(3);
                String phone = rs.getString(4);
                String email = rs.getString(5);
                int role = rs.getInt(6);
                Timestamp regTime = rs.getTimestamp(7);
                return new User(id,username,password,phone,email,role,regTime);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        finally {
            this.closeResource();
        }
        return null;
    }

    public List<User> getUserList(){
        List<User> userList = new ArrayList<>();
        String sql = "select * from user where role = 0";
        Object[] obj = {};
        rs = this.ExecuteQuery(sql,obj);
        try {
            while (rs.next()){
                long id = rs.getInt(1);
                String username = rs.getString(2);
                String password = rs.getString(3);
                String phone = rs.getString(4);
                String email = rs.getString(5);
                int role = rs.getInt(6);
                Timestamp regTime = rs.getTimestamp(7);
                userList.add(new User(id,username,password,phone,email,role,regTime));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        finally {
            this.closeResource();
        }
        return userList;
    }
}
