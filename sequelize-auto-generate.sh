TABLE=${1}
if [ -z ${TABLE} ]; then
  echo "Usage: ${0} 表名称 生成对应的表模型到 ./models 下"
  exit 0
fi
echo "生成表 ${TABLE}..."
# sequelize-auto -o "./models/table" -d weixin -h localhost -u root -p 3306 -x Root@123 -e mysql;
# sequelize-gen -h localhost -p 3306 -d node  -u hlm -x Root@123  -e mysql -o ./models/table;
sequelize-auto -h localhost -p 3306 -d node -u hlm -x Root@123 --dialect mysql -C -o ./models/table