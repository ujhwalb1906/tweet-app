package com.tweetapp.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
//import org.springframework.data.mongodb.core.mapping.Document;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBDocument;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBHashKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable;
import com.tweetapp.constants.ServiceConstants;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
//@Document(collection = ServiceConstants.COMMENT_COLLECTION_TABLE)
//@DynamoDBTable(tableName = "Comment")
@DynamoDBDocument
public class Comment {
//	@DynamoDBHashKey
	String commentId;
//	@DynamoDBAttribute
	String postId;
//	@DynamoDBAttribute
	String author;
//	@DynamoDBAttribute
	String commentMessage;
//	@DynamoDBAttribute
	Date dateOfComment;
}