package com.simat.meetingroom.dao;

import cn.meetingroom.model.Item;

import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

public class ItemDao extends BaseDao{
    public boolean addItem(Item item){
        String sql = "insert into item(user_id,room_id,data,tInterval,reason,state) values(?,?,?,?,?,?)";
        Object[] obj = {item.getUserId(),item.getRoomId(),item.getData(),item.gettInterval(),item.getReason(),item.getState()};
        int i = this.executeUpdate(sql,obj);
        this.closeResource();
        if(i>0){
            return true;
        }
        return false;
    }

    public boolean delItem(long id){
        String sql = "delete from item where id = ?";
        Object[] obj = {id};
        int i = this.executeUpdate(sql,obj);
        this.closeResource();
        if(i>0){
            return true;
        }
        return false;
    }

    public boolean changeState(long id,int state){
        String sql = "update item set state = ? where id = ?";
        Object[] obj = {state,id};
        int i = this.executeUpdate(sql,obj);
        this.closeResource();
        if(i>0){
            return true;
        }
        return false;
    }

    public boolean updateItem(String upColName,Object upValue,String colName,Object value){
        String sql = "update item set "+upColName+" = ? where "+colName+" = ?";
        Object[] obj = {upValue,value};
        int i = this.executeUpdate(sql,obj);
        this.closeResource();
        if(i>0){
            return true;
        }
        return false;
    }

    //获取未处理申请项
    public List<Item> getUntreated(){
        List<Item> itemList = new ArrayList<>();
        String sql = "select * from item where state = ?";
        Object[] obj = {1};
        rs = this.ExecuteQuery(sql,obj);
        try {
            while (rs.next()){
                long id = rs.getLong(1);
                long userId = rs.getLong(2);
                int roomId = rs.getInt(3);
                String data = rs.getString(4);
                int interval = rs.getInt(5);
                String reason = rs.getString(6);
                int state = rs.getInt(7);
                Timestamp applyTime = rs.getTimestamp(8);
                itemList.add(new Item(id,userId,roomId,data,interval,reason,state,applyTime));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            this.closeResource();
        }
        return itemList;
    }

    public List<Item> search(String colName,Object value){
        List<Item> rsList = new ArrayList<>();
        String sql = "select * from item where "+colName+" = ?";
        Object[] obj = {value};
        rs = this.ExecuteQuery(sql,obj);
        try {
            while (rs.next()){
                long id = rs.getLong(1);
                long userId = rs.getLong(2);
                int roomId = rs.getInt(3);
                String data = rs.getString(4);
                int interval = rs.getInt(5);
                String reason = rs.getString(6);
                int state = rs.getInt(7);
                Timestamp applyTime = rs.getTimestamp(8);
                rsList.add(new Item(id,userId,roomId,data,interval,reason,state,applyTime));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        finally {
            this.closeResource();
        }
        return null;
    }

    public Item find(String colName,Object value){
        String sql = "select * from item where "+colName+" = ?";
        Object[] obj = {value};
        rs = this.ExecuteQuery(sql,obj);
        try {
            while (rs.next()){
                long id = rs.getLong(1);
                long userId = rs.getLong(2);
                int roomId = rs.getInt(3);
                String data = rs.getString(4);
                int interval = rs.getInt(5);
                String reason = rs.getString(6);
                int state = rs.getInt(7);
                Timestamp applyTime = rs.getTimestamp(8);
                return new Item(id,userId,roomId,data,interval,reason,state,applyTime);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            this.closeResource();
        }
        return null;
    }

}
