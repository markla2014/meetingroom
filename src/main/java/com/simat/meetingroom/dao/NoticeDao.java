package com.simat.meetingroom.dao;

import cn.meetingroom.model.Notice;

import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

public class NoticeDao extends BaseDao{
    public boolean addNotice(Notice notice){
        String sql = "insert into notice(createUser,noticeTitle,noticeText) values(?,?,?)";
        Object[] obj = {notice.getcUserId(),notice.getnTitle(),notice.getnText()};
        int i = this.executeUpdate(sql,obj);
        this.closeResource();
        if(i>0){
            return true;
        }
        return false;
    }

    public boolean delNotice(String colName,Object value){
        String sql = "delete from notice where "+colName+" = ?";
        Object[] obj = {value};
        int i = this.executeUpdate(sql,obj);
        this.closeResource();
        if(i>0){
            return true;
        }
        return false;
    }

    public List<Notice> getAllNotice(){
        List<Notice> noticeList = new ArrayList<>();
        String sql = "select * from notice";
        Object[] obj = {};
        rs = this.ExecuteQuery(sql,obj);
        try {
            while (rs.next()){
               int nId = rs.getInt(1);
               long uId = rs.getLong(2);
               String nTitle = rs.getString(3);
               String nText = rs.getString(4);
               Timestamp ctime = rs.getTimestamp(5);
               noticeList.add(new Notice(nId,uId,nTitle,nText,ctime));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            this.closeResource();
        }
        return noticeList;
    }

    public int getUnreadNum(Timestamp timestamp){
        List<Notice> noticeList = new ArrayList<>();
        String sql = "select count(*) from notice where createTime >= ?";
        Object[] obj = {timestamp};
        rs = this.ExecuteQuery(sql,obj);
        try {
            while (rs.next()){
                int count = rs.getInt(1);
               return count;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            this.closeResource();
        }
        return 0;
    }

    public Notice find(String colName, Object value){
        String sql = "select * from notice where "+colName+" = ?";
        Object[] obj = {value};
        rs = this.ExecuteQuery(sql,obj);
        try {
            while (rs.next()){
                int nId = rs.getInt(1);
                long uId = rs.getLong(2);
                String nTitle = rs.getString(3);
                String nText = rs.getString(4);
                Timestamp ctime = rs.getTimestamp(5);
                return new Notice(nId,uId,nTitle,nText,ctime);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        finally {
            this.closeResource();
        }
        return null;
    }
}
