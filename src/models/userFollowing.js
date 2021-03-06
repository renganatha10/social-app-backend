// Users I am Following

module.exports = (sequelize, DataTypes) => {
  const UserFollowing = sequelize.define(
    "UserFollowing",
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      userId: {
        type: DataTypes.UUID
      },
      followerId: {
        type: DataTypes.UUID
      },
      isFavorite: { type: DataTypes.BOOLEAN }
    },
    {
      underscored: false,
      timestamps: true
    }
  );

  UserFollowing.associate = models => {
    UserFollowing.belongsTo(models.User, {
      onDelete: "CASCADE",
      as: "follower",
      foreignKey: {
        name: "followerId",
        allowNull: false
      }
    });
    UserFollowing.belongsTo(models.User, {
      onDelete: "CASCADE",
      as: "user",
      foreignKey: {
        name: "userId",
        allowNull: false
      }
    });
  };

  return UserFollowing;
};
