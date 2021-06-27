package com.tweetapp.repository;

import java.util.List;

import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import org.springframework.data.repository.CrudRepository;
//import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.tweetapp.model.User;

//@Repository
@EnableScan
public interface UserRepository extends CrudRepository<User, String>{

	User findByUsername(String username);

	List<User> findByUsernameLike(String username);

}