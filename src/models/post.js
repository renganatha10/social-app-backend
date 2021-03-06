module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      text: { type: DataTypes.STRING },
      videoUrl: { type: DataTypes.STRING },
      photoUrl: { type: DataTypes.STRING },
      userId: {
        type: DataTypes.UUID
      }
    },
    {
      underscored: false,
      timestamps: true
    }
  );

  Post.associate = models => {
    Post.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        name: "userId",
        allowNull: false
      }
    });
  };

  Post.instanceMethods = () => {
    () => {
      //eslint-disable-next-line
      console.log(this.title);
    };
  };

  return Post;
};
