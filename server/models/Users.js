module.exports = (sequelize, DataTypes) => {
	const Users = sequelize.define('Users',{ 
		username: {
			type:DataTypes.STRING,
			allowNull: false
		},
		email: {
			type:DataTypes.STRING,
			allowNull: false
		},
		password: {
			type:DataTypes.STRING,
			allowNull: false
		},
		location: {
			type:DataTypes.STRING,
			allowNull: false
		},
		img: {
			type:DataTypes.STRING,
			allowNull: false
		},
	})

	Users.associate = (models) =>{
		// Users.hasMany(models.Friends,{
		// 	onDelete: 'cascade'
		// });
		
		Users.hasMany(models.Posts,{
			onDelete: 'cascade'
		})

		// Users.hasMany(models.Likes,{
		// 	onDelete: 'cascade'
		// })
	}

	return Users
}
