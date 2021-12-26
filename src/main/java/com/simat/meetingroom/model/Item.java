package com.simat.meetingroom.model;

import java.sql.Timestamp;

public class Item {
    private long id;
    private long userid;
    private int roomid;
    private String data;
    private int tInterval;
    private String reason;
    private int state;
    private Timestamp applyTime;

    public Item(long id, long userid, int roomid, String data, int tInterval, String reason, int state, Timestamp applyTime) {
        this.id = id;
        this.userid = userid;
        this.roomid = roomid;
        this.data = data;
        this.tInterval = tInterval;
        this.reason = reason;
        this.state = state;
        this.applyTime = applyTime;
    }

    public Item() {
    }

    public long getUserId() {
        return userid;
    }

    public void setUserId(long userId) {
        this.userid = userId;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getRoomId() {
        return roomid;
    }

    public void setRoomId(int roomId) {
        this.roomid = roomId;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public int gettInterval() {
        return tInterval;
    }

    public void settInterval(int tInterval) {
        this.tInterval = tInterval;
    }

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }

    public Timestamp getApplyTime() {
        return applyTime;
    }

    public void setApplyTime(Timestamp applyTime) {
        this.applyTime = applyTime;
    }
}
