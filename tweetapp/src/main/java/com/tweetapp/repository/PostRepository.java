package com.tweetapp.repository;

import java.util.List;

import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
//import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.tweetapp.model.Post;
//import com.tweetapp.tweetservice.model.TweetDoc;

//@Repository
@EnableScan
public interface PostRepository extends CrudRepository<Post, String>{
	
//	List<Post> findByUserName(String userName);
	List<Post> findByAuthor(String username);
}
