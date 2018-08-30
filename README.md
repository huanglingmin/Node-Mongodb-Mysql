# my_node

## 安装依赖
```
npm install
```

### 启动服务
```
npm run start
```

### 生成mysql表结构
```
sequelize-gen -h localhost -p 3306 -d weixin  -u root -x Root@123  -e mysql -o ./models/table;
```
