module.exports = (sequelize, DataTypes) => {
	const Posts = sequelize.define('Posts',{ 
		title: {
			type:DataTypes.STRING,
			allowNull: false
		},
		desc: {
			type:DataTypes.STRING,
			allowNull: false
		},
		img: {
			type:DataTypes.STRING,
			allowNull: false
		},
		date: {
			type:DataTypes.DATE,
			allowNull: false
		},
		cate: {
			type:DataTypes.STRING,
			allowNull: false
		},
	})

	Posts.associate = (models) =>{
		// Posts.hasMany(models.Friends,{
		// 	onDelete: 'cascade'
		// });

		// Posts.hasMany(models.Likes,{
		// 	onDelete: 'cascade'
		// })
	}

	return Posts
}
