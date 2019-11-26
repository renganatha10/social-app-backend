module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      text: { type: DataTypes.STRING }
    },
    {
      underscored: false,
      timestamps: true
    }
  );

  Comment.associate = models => {
    Comment.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        name: "userId",
        allowNull: false
      }
    });

    Comment.belongsTo(models.Post, {
      onDelete: "CASCADE",
      foreignKey: {
        name: "postId",
        allowNull: false
      }
    });
  };

  Comment.instanceMethods = () => {
    () => {
      //eslint-disable-next-line
      console.log(this.title);
    };
  };

  return Comment;
};
