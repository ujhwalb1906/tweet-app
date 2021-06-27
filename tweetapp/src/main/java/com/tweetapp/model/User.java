package com.tweetapp.model;

import org.springframework.data.annotation.Id;
//import org.springframework.data.mongodb.core.index.Indexed;
//import org.springframework.data.mongodb.core.mapping.Document;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBHashKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable;
import com.tweetapp.constants.ServiceConstants;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
//@Document(collection = ServiceConstants.USER_COLLECTION_TABLE)
@DynamoDBTable(tableName = "User")
public class User {
	@DynamoDBHashKey
	String username;
//	@Indexed(unique = true)
	@DynamoDBAttribute
	String email;
	@ApiModelProperty(hidden = true)
	@DynamoDBAttribute
	String password;
	@DynamoDBAttribute
	String firstName;
	@DynamoDBAttribute
	String lastName;
	@DynamoDBAttribute
	String contactNumber;
	@DynamoDBAttribute
	String gender;
	
}