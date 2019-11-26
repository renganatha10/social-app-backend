module.exports = (sequelize, DataTypes) => {
  const PostLike = sequelize.define(
    "PostLike",
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      }
    },
    {
      underscored: false,
      timestamps: true
    }
  );

  PostLike.associate = models => {
    PostLike.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        name: "userId",
        allowNull: false
      }
    });

    PostLike.belongsTo(models.Post, {
      onDelete: "CASCADE",
      foreignKey: {
        name: "postId",
        allowNull: false
      }
    });
  };

  return PostLike;
};
