module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      email: { type: DataTypes.STRING, unique: true, allowNull: false },
      gender: { type: DataTypes.ENUM("MALE", "FEMALE"), allowNull: false },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      nickName: { type: DataTypes.STRING, unique: true },
      dateOfBirth: DataTypes.DATE,
      bio: { type: DataTypes.STRING },
      coverPhoto: DataTypes.STRING,
      profilePhoto: DataTypes.STRING
    },
    {
      underscored: true,
      timestamps: true
    }
  );

  User.associate = models => {
    User.hasMany(models.Post);
  };

  return User;
};
