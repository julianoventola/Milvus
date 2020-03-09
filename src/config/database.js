// Não suporta import/export
module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'milvus',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
