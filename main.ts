// import config from './src/config'

// import { onError, onStrategySuccess } from './src/callbacks'

// const main = () => {
//     Object.keys(config).forEach((strategyName) => {
//         const strategy = config[strategyName]

//         if (!strategy.enabled) return

//         console.log(`Running ${strategyName}...`)

//         strategy.call({
//             config: strategy.config || {},
//             onError,
//             onSuccess: onStrategySuccess,
//         })
//     })
// }

// main()
