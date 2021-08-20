import Sequelize, { Model } from 'sequelize';

class answerVF extends Model {
  static init(connection) {
    super.init(
      {
        idanswerVF: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        difficultQuestion: Sequelize.NUMBER,
        keyAnswer: Sequelize.NUMBER,
        answerIsTrue: Sequelize.BOOLEAN,
        descriptionFeedback: Sequelize.STRING,
      },
      { sequelize: connection, tableName: 'answersVF' }
    );
    return this;
  }
}

export default answerVFModels;