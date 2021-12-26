package com.simat.meetingroom.model;

import java.sql.Timestamp;

public class Notice {
    private int nId;
    private long cUserId;
    private String nTitle;
    private String nText;
    private Timestamp cTime;

    public Notice() {
    }

    public Notice(int nId, long cUserId, String nTitle, String nText, Timestamp cTime) {
        this.nId = nId;
        this.cUserId = cUserId;
        this.nTitle = nTitle;
        this.nText = nText;
        this.cTime = cTime;
    }

    public int getnId() {
        return nId;
    }

    public void setnId(int nId) {
        this.nId = nId;
    }

    public long getcUserId() {
        return cUserId;
    }

    public void setcUserId(long cUserId) {
        this.cUserId = cUserId;
    }

    public String getnTitle() {
        return nTitle;
    }

    public void setnTitle(String nTitle) {
        this.nTitle = nTitle;
    }

    public String getnText() {
        return nText;
    }

    public void setnText(String nText) {
        this.nText = nText;
    }

    public Timestamp getcTime() {
        return cTime;
    }

    public void setcTime(Timestamp cTime) {
        this.cTime = cTime;
    }
}
