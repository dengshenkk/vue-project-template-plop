//
// module.exports = function (plop) {
//
//     plop.setGenerator('controller', {
//         description: 'application controller',
//
//         // inquirer prompts
//         prompts: [{
//             type: 'input',
//             name: 'name',
//             message: 'Controller name?'
//         }],
//
//         // actions to perform
//         actions: [{
//             type: 'add',
//             path: 'src/controllers/{{dashCase name}}.vue',
//             templateFile: 'templates/module/view.hbs',
//         }]
//     });
//
// };
function formatTime(time = +new Date()) {
    return  new Date(time + 8 * 3600 * 1000).toJSON().substr(0, 19).replace('T', ' ').replace(/-/g, '.')
}

module.exports = function (plop) {
    // create your generators here
    plop.setGenerator('模块', {
        description: '开发一个新的模块',
        // array of inquirer prompts
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: '请输入模块名称'
            },
            {
                type: 'confirm',
                name: 'router',
                message: '是否需要路由配置文件',
                default: 'Y'
            },
            {
                type: 'confirm',
                name: 'style',
                message: '是否需要样式配置文件',
                default: 'Y'
            }
        ],
        // array of actions
        actions: (data) => {
            console.log('data', data)
            console.log(`正在创建${data.name}模块...`)
            const actions = [
                {
                    type: 'add',
                    path: 'src/views/{{name}}/view/index.vue',
                    templateFile: 'templates/module/view.hbs',
                    data: {
                        time: formatTime()
                    }
                }
            ]
            if (data.router) {
                actions.push({
                    type: 'add',
                    path: 'src/views/{{name}}/index.js',
                    templateFile: 'templates/module/router.hbs',
                    data: {
                        time: formatTime()
                    }
                })
            }

            if (data.style) {
                actions.push({
                    type: 'add',
                    path: 'src/views/{{name}}/index.scss',
                    templateFile: 'templates/module/style.hbs',
                    data: {
                        time: formatTime()
                    }
                })
            }
            return actions
        }
    });
};
