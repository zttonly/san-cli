
module.exports = (chainConfig, name, test, options = {}) => {
    // options可以按照url-loader传入limit和name，也可以直接传入asset module的参数parser和generator
    options = {
        parser: {
            dataUrlCondition: {maxSize: options.limit}
        },
        generator: {
            filename: options.name
        },
        ...options
    };
    chainConfig.module
        .rule(name)
        .test(test)
        .type('asset')
        .parser(options.parser)
        .generator(options.generator)
        .end();
};
