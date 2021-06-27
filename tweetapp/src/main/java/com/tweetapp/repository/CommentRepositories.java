package com.tweetapp.repository;

import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
//import org.springframework.data.mongodb.repository.DeleteQuery;
//import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.tweetapp.model.Comment;

//@Repository
//@EnableScan
public interface CommentRepositories {
//	@DeleteQuery
	void deleteByPostId(String postId);
}