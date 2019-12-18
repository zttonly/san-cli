/**
 * @file command Component
 * @author wangyongqing <wangyongqing01@baidu.com>
 */
const builder = {
    'use-https': {
        type: 'boolean',
        default: false,
        describe: 'Enable https'
    },
    public: {
        type: 'string',
        describe: 'Specify the public URL for the HMR client'
    },
    output: {
        type: 'boolean',
        default: false,
        describe: 'Export static files generated by building'
    },
    config: {
        alias: 'config-file',
        type: 'string',
        describe: 'Project config file'
    },
    port: {
        alias: 'p',
        default: 8888,
        type: 'number',
        describe: 'Port number of the URL'
    },
    open: {
        alias: 'O',
        type: 'boolean',
        default: false,
        describe: 'Open Browser after the build is complete'
    },
    host: {
        alias: 'H',
        type: 'string',
        describe: 'Hostname of the URL'
    },
    qrcode: {
        type: 'boolean',
        default: true,
        describe: 'Print out the QRCode of the URL'
    }
};
const describe = 'Convert Markdown to San component';
const command = 'md [entry]';
module.exports = {
    id: 'san-cli-command-component',
    apply(api, projectOptions) {
        // 给 service 注册命令
        api.registerCommand(command, {
            builder,
            describe,
            handler(argv) {
                if (argv.output) {
                    require('./build')(argv, api, projectOptions);
                } else {
                    require('./serve')(argv, api, projectOptions);
                }
            }
        });
    },
    command: {
        name: command,
        describe,
        builder
    }
};
