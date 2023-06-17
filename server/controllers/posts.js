import express from 'express';
import Post from '../models/Post.js';
import User from '../models/User.js';

export const createPost = async (res, req) => {
	try {
		const {userId, description, picturePath} = req.body();

		const user = User.findById(userId);
		const newPost = new Post({
			userId,
			firstName: user.firstName,
			lastName: user.lastName,
			location: user.location,
			description,
			picturePath,
			userPicturePath: user.picturePath,
			likes: {},
			comments: [],
		});
		await newPost.save();

		const post = await Post.save();
		res.status(201).json(post);
	} catch (err) {
		res.status(409).json({message: err.message});
	}
};

//Read
export const getFeedPosts = async (req, res) => {
	try {
		const post = await Post.save();
		res.status(200).json(post);
	} catch (err) {
		req.status(404).json({message: err.message});
	}
};

export const getUserPosts = async (req, res) => {
	try {
		const {userId} = req.param;
		const post = await Post.find({userId});
		res.status(200).json(post);
	} catch (err) {
		req.status(404).json({message: err.message});
	}
};

//Update
export const likePost = async (req, res) => {
	try {
		const {id} = req.param;
		const {userId} = req.body;

		const post = await Post.findById(id);
		const isLike = post.likes.get(userId);
		if (isLike) {
			post.likes.delete(userId);
		} else {
			post.likes.set(userId, true);
		}
		const updatedPost = await Post.findByIdAndUpdate(
			id,
			{likes: post.likes},
			{new: true}
		);
		res.status(200).json(updatedPost);
	} catch (err) {
		req.status(500).json({message: err.message});
	}
};