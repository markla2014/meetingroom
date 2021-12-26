package com.simat.meetingroom.model;

public class RoomState {
    private long itemId;
    private int roomId;
    private String roomNum;
    private String data;
    private int interval;
    private int state;

    public RoomState(int roomId, String roomNum, String data, int interval, int state) {
        this.roomId = roomId;
        this.roomNum = roomNum;
        this.data = data;
        this.interval = interval;
        this.state = state;
    }

    public RoomState(long itemId, int roomId, String roomNum, String data, int interval, int state) {
        this.itemId = itemId;
        this.roomId = roomId;
        this.roomNum = roomNum;
        this.data = data;
        this.interval = interval;
        this.state = state;
    }

    public RoomState() {
    }

    public long getItemId() {
        return itemId;
    }

    public void setItemId(long itemId) {
        this.itemId = itemId;
    }

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }

    public int getRoomId() {
        return roomId;
    }

    public void setRoomId(int roomId) {
        this.roomId = roomId;
    }

    public String getRoomNum() {
        return roomNum;
    }

    public void setRoomNum(String roomNum) {
        this.roomNum = roomNum;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public int getInterval() {
        return interval;
    }

    public void setInterval(int interval) {
        this.interval = interval;
    }
}
