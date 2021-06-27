package com.tweetapp.model;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
//import org.springframework.data.mongodb.core.mapping.Document;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBHashKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTypeConvertedJson;
import com.tweetapp.constants.ServiceConstants;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
//@Document(collection = ServiceConstants.POST_COLLECTION_TABLE)
@DynamoDBTable(tableName = "Post")
public class Post {
	@DynamoDBHashKey
	String id;
	@DynamoDBAttribute
	String author;
	@DynamoDBAttribute
	String postMessage;
	@DynamoDBAttribute
	String hasTag;
	@DynamoDBAttribute
	Date dateOfPost;
	@DynamoDBAttribute
	Long likesCount;
	@DynamoDBTypeConvertedJson
	@DynamoDBAttribute
	List<Comment> comments;
	
}