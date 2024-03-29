package com.adposting.restcontroller.entity;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Ads")
public class Ads {

    @Id
    private ObjectId _id;

    @Indexed(unique = true)
    private int adId;
    private String adCategory;
    private String phoneNumber;
    private int price;
    private String specification;
    private  String district;
    private String ownerDiscription;

    public Ads(ObjectId _id, int adId, String adCategory, String phoneNumber, int price, String specification, String district, String ownerDiscription) {
        this._id = _id;
        this.adId = adId;
        this.adCategory = adCategory;
        this.phoneNumber = phoneNumber;
        this.price = price;
        this.specification = specification;
        this.district = district;
        this.ownerDiscription = ownerDiscription;
    }

    public ObjectId get_id() {
        return _id;
    }

    public void set_id(ObjectId _id) {
        this._id = _id;
    }

    public int getAdId() {
        return adId;
    }

    public void setAdId(int adId) {
        this.adId = adId;
    }

    public String getAdCategory() {
        return adCategory;
    }

    public void setAdCategory(String adCategory) {
        this.adCategory = adCategory;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getSpecification() {
        return specification;
    }

    public void setSpecification(String specification) {
        this.specification = specification;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getOwnerDiscription() {
        return ownerDiscription;
    }

    public void setOwnerDiscription(String ownerDiscription) {
        this.ownerDiscription = ownerDiscription;
    }
}
