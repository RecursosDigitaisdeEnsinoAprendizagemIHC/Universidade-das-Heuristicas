import Sequelize, { Model } from 'sequelize';

class Phase extends Model {
  static init(connection) {
    super.init(
      {
        idPhase: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        namePhase: Sequelize.STRING,
        descriptionPhase: Sequelize.STRING,
        imagePhase:Sequelize.STRING,
        dificultPhase:Sequelize.NUMBER,
        minPointsPhase: Sequelize.NUMBER
      },
      { sequelize: connection, tableName: 'Phase' }
    );
    return this;
  }
}

export default PhaseModels;