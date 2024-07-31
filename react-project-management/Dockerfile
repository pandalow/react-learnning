# 使用官方的node镜像作为构建镜像
FROM node:14 AS build

# 设置工作目录
WORKDIR /app

# 复制package.json和package-lock.json文件
COPY package*.json ./

# 安装依赖项
RUN npm install

# 复制所有文件到工作目录
COPY . .

# 构建React应用
RUN npm run build

# 使用nginx作为Web服务器
FROM nginx:alpine

# 复制构建后的文件到nginx的html目录
COPY --from=build /app/build /usr/share/nginx/html

# 复制自定义的nginx配置文件
COPY nginx.conf /etc/nginx/nginx.conf

# 暴露端口80
EXPOSE 80

# 启动nginx
CMD ["nginx", "-g", "daemon off;"]
