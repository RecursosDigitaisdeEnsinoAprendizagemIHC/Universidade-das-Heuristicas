import Sequelize, { Model } from 'sequelize';

class SessionPlayer extends Model {
  static init(connection) {
    super.init(
      {
        idSession: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        timeSession: Sequelize.TIME,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
        pointsSession: Sequelize.NUMBER,
      },
      { sequelize: connection, tableName: 'sessionPlayers' }
    );
    return this;
  }
}

export default SessionPlayerModels;