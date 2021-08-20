import Sequelize, { Model } from 'sequelize';
import hashPass from '../../utils/hashPass';
import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';

class Player  extends Model {
  static init(connection) {
    super.init(
      {
        idPlayer: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        idImage: {
          type: Sequelize.NUMBER,
          references: {
            model: 'imagePlayer',
            key: 'idImage',
          },
          primaryKey: true,
        },
        pointsPhase: {
          type: Sequelize.NUMBER,
          references: {
            model: 'Phase',
            key: 'idPhase',
          },
          primaryKey: true,
        },
        name: Sequelize.STRING,
        sexUser: Sequelize.BOOLEAN,
      },
      { sequelize: connection, tableName: 'players' }
        
    );
  }
  

  static associate(models) {
    this.hasOne(models.imagePlayerModel, {
      foreignKey: 'idImage',
      as: 'Image',
    });
    this.belongsTo(models.phaseModels, {
      foreignKey: 'idPhase',
      as: 'pointPhase',
    });
  }
}

export default PlayerModels;