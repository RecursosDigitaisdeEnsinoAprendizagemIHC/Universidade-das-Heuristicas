import Sequelize, { Model } from 'sequelize';

class Question extends Model {
  static init(connection) {
    super.init(
      {
        idQuestion: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        imageQuestion: Sequelize.STRING,
        pointQuestion: Sequelize.NUMBER,
        multipleChoice: Sequelize.BOOLEAN,
        titleQuestion: Sequelize.STRING,
        descriptionQuestion: Sequelize.STRING,
      },
      { sequelize: connection, tableName: 'Questions' }
    );
    return this;
  }
}

export default QuestionModels;