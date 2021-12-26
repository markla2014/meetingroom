package com.simat.meetingroom.dao;

import cn.meetingroom.model.Room;
import cn.meetingroom.model.RoomState;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class RoomDao extends BaseDao{
    public boolean addRoom(Room room){
        String sql = "insert into room(room_num,room_name,place,introduction,capacity,imgurl) values(?,?,?,?,?,?)";
        Object[] obj = {room.getNum(),room.getRoomName(),room.getPlace(),room.getIntroduction(),room.getCapacity(),room.getImgUrl()};
        int i = this.executeUpdate(sql,obj);
        this.closeResource();
        if(i>0){
            return true;
        }
        return false;
    }

    public List<Room> getAllRoom(){
        List<Room> roomList = new ArrayList<>();
        String sql = "select * from room";
        Object[] obj = {};
        rs = this.ExecuteQuery(sql,obj);
        try {
            while (rs.next()){
                int id = rs.getInt(1);
                String num = rs.getString(2);
                String name = rs.getString(3);
                String place = rs.getString(4);
                String intro = rs.getString(5);
                int cap = rs.getInt(6);
                String img = rs.getString(7);
                roomList.add(new Room(id,num,name,place,intro,cap,img));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            this.closeResource();
        }
        return roomList;
    }

    public List<Room> fuzzySearch(String value){
        List<Room> roomList = new ArrayList<>();
        String sql = "select * from room where match(room_num,room_name,place,introduction) against( ? in boolean mode);";
        Object[] obj = {value};
        rs = this.ExecuteQuery(sql,obj);
        try {
            while (rs.next()){
                int id = rs.getInt(1);
                String num = rs.getString(2);
                String name = rs.getString(3);
                String place = rs.getString(4);
                String intro = rs.getString(5);
                int cap = rs.getInt(6);
                String img = rs.getString(7);
                roomList.add(new Room(id,num,name,place,intro,cap,img));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            this.closeResource();
        }
        return roomList;
    }

    public List<RoomState> getRoomStateList(){
        List<RoomState> roomStateList = new ArrayList<>();
        String sql = "select r.id,r.room_num,i.data,i.tInterval,i.state from item i,room r where i.room_id=r.id";
        Object[] obj = {};
        rs = this.ExecuteQuery(sql,obj);
        try {
            while (rs.next()){
                int roomId = rs.getInt(1);
                String roomNum = rs.getString(2);
                String data = rs.getString(3);
                int interval = rs.getInt(4);
                int state = rs.getInt(5);
                roomStateList.add(new RoomState(roomId,roomNum,data,interval,state));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            this.closeResource();
        }
        return roomStateList;
    }

    public List<RoomState> getRoomStateListByUser(long userId){
        List<RoomState> roomStateList = new ArrayList<>();
        String sql = "select i.id,r.id,r.room_num,i.data,i.tInterval,i.state from room r, item i where r.id = i.room_id and i.user_id = ? order by data";
        Object[] obj = {userId};
        rs = this.ExecuteQuery(sql,obj);
        try {
            while (rs.next()){
                long itemId = rs.getLong(1);
                int roomId = rs.getInt(2);
                String roomNum = rs.getString(3);
                String data = rs.getString(4);
                int interval = rs.getInt(5);
                int state = rs.getInt(6);
                roomStateList.add(new RoomState(itemId,roomId,roomNum,data,interval,state));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            this.closeResource();
        }
        return roomStateList;
    }

    public List<Room> search(String colName,Object value){
        List<Room> roomList = new ArrayList<>();
        String sql = "select * from room where"+colName+" = ?";
        Object[] obj = {value};
        rs = this.ExecuteQuery(sql,obj);
        try {
            while (rs.next()){
                int id = rs.getInt(1);
                String num = rs.getString(2);
                String name = rs.getString(3);
                String place = rs.getString(4);
                String intro = rs.getString(5);
                int cap = rs.getInt(6);
                String img = rs.getString(7);
                roomList.add(new Room(id,num,name,place,intro,cap,img));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            this.closeResource();
        }
        return roomList;
    }

    public Room find(String colName,Object value){
        String sql = "select * from room where "+colName+" = ?";
        Object[] obj = {value};
        rs = this.ExecuteQuery(sql,obj);
        try {
            while (rs.next()){
                int id = rs.getInt(1);
                String num = rs.getString(2);
                String name = rs.getString(3);
                String place = rs.getString(4);
                String intro = rs.getString(5);
                int cap = rs.getInt(6);
                String img = rs.getString(7);
                return new Room(id,num,name,place,intro,cap,img);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            this.closeResource();
        }
        return null;
    }
}
