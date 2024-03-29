package com.adposting.restcontroller.entity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdsRespository extends MongoRepository<Ads, Integer>{
     Ads findAdsByAdId(int adId);


Optional<Ads> findByAdCategory(String adCategory);


}
