module.exports = (app) => {
	app.use((req, res, next) => {
		res.result = function () {
			let code = arguments[0];
			let data = arguments[1];
			let result = {
				status: code
			};
			if (data) {
				switch (data.length) {
					case 1:
						var param = data[0];
						switch (typeof (param)) {
							case 'string':
								result.msg = param;
								break;
							default:
								result.data = param;
								break;
						}
						break;
					case 2:
						result.msg = data[0];
						result.data = data[1];
				}
			}
			// 会改变浏览器响应状态码
			res.status(code).json(result);
			// res.json(result);
		};
		let methods = [{
			method: 'ok',
			status: 200
		}, {
			method: 'bad_request',
			status: 400
		}, {
			method: 'unauthorized',
			status: 401
		}, {
			method: 'forbidden',
			status: 403
		}, {
			method: 'internal_server_error',
			status: 500
		}];
		methods.forEach(obj => {
			res[obj.method] = function () {
				res.result(obj.status, arguments);
			};
		});
		next();
	});
};