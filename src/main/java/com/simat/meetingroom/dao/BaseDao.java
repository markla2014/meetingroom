package com.simat.meetingroom.dao;

import java.sql.*;

public class BaseDao {
    Connection con = null;
    PreparedStatement ps = null;
    ResultSet rs = null;

    //创建连接
    public boolean getConnection(){
        String driver = "com.mysql.cj.jdbc.Driver";
        String url = "jdbc:mysql://localhost:3306/meetingroom?useSSL=false&serverTimezone=UTC";
        String username = "root";
        String password = "123456";
        try {
            Class.forName(driver);
            con= DriverManager.getConnection(url,username,password);
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        return true;
    }

    //关闭资源
    public boolean closeResource(){
        if (rs!=null){
            try {
                rs.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }

        if (ps!=null){
            try {
                ps.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }

        if (con!=null){
            try {
                con.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return true;
    }

    //增删改
    public int executeUpdate(String sql,Object[] obj){
        int upDataRows = 0;
        if (this.getConnection()){
            try {
                ps=con.prepareStatement(sql);
                for (int i = 0; i < obj.length; i++) {
                    ps.setObject(i+1,obj[i]);
                }

                //返回影响的行数
                upDataRows=ps.executeUpdate();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return upDataRows;
    }

    //查询
    public ResultSet ExecuteQuery(String sql, Object[] obj){
        if (this.getConnection()){
            try {
                ps=con.prepareStatement(sql);
                for (int i = 0; i < obj.length; i++) {
                    ps.setObject(i+1,obj[i]);
                }

                //返回结果集
                rs = ps.executeQuery();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return rs;
    }
}
