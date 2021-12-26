package com.simat.meetingroom.model;

public class Room {
    private int id;
    private String num;
    private String roomName;
    private String place;
    private String introduction;
    private int capacity;
    private String imgUrl;

    public Room(int id, String num, String roomName, String place, String introduction, int capacity, String imgUrl) {
        this.id = id;
        this.num = num;
        this.roomName = roomName;
        this.place = place;
        this.introduction = introduction;
        this.capacity = capacity;
        this.imgUrl = imgUrl;
    }

    public Room() {
    }

    public String getNum() {
        return num;
    }

    public void setNum(String num) {
        this.num = num;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public String getRoomName() {
        return roomName;
    }

    public void setRoomName(String roomName) {
        this.roomName = roomName;
    }

    public int getId() {
        return id;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public String getIntroduction() {
        return introduction;
    }

    public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }
}
