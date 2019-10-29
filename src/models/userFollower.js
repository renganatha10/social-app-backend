// Users Following Me

module.exports = (sequelize, DataTypes) => {
  const UserFollower = sequelize.define(
    "UserFollower",
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
      }
    },
    {
      underscored: false,
      timestamps: true
    }
  );

  UserFollower.associate = models => {
    UserFollower.belongsTo(models.User, {
      onDelete: "CASCADE",
      as: "follower",
      foreignKey: {
        name: "followerId",
        allowNull: false
      }
    });
    UserFollower.belongsTo(models.User, {
      onDelete: "CASCADE",
      as: "user",
      foreignKey: {
        name: "userId",
        allowNull: false
      }
    });
  };

  return UserFollower;
};
