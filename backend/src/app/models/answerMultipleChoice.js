import Sequelize, { Model } from 'sequelize';

class answerMultipleChoice extends Model {
  static init(connection) {
    super.init(
      {
        idAnswerMultipleChoice: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        difficultQuestion: Sequelize.NUMBER,
        keyAnswer: Sequelize.NUMBER,
        descriptionOption1: Sequelize.STRING,
        descriptionOption2: Sequelize.STRING,
        descriptionOption3: Sequelize.STRING,
        descriptionOption4: Sequelize.STRING,
        descriptionFeedback: Sequelize.STRING,
      },
      { sequelize: connection, tableName: 'answerMultipleChoice' }
    );
    return this;
  }
}

export default answerMultipleModel;