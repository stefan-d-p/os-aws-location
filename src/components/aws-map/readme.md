# aws-map



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute  | Description                                     | Type     | Default     |
| --------- | ---------- | ----------------------------------------------- | -------- | ----------- |
| `apiKey`  | `api-key`  | API generated in AWS Location Service Console * | `string` | `undefined` |
| `lat`     | `lat`      | Initial latitude position *                     | `number` | `undefined` |
| `lng`     | `lng`      | Initial longitude position *                    | `number` | `undefined` |
| `mapName` | `map-name` | Map name from AWS Location Service console *    | `string` | `undefined` |
| `region`  | `region`   | AWS Region *                                    | `string` | `undefined` |
| `zoom`    | `zoom`     | Zoom Level *                                    | `number` | `10`        |


## Methods

### `addMarker(color: string, lng: number, lat: number) => Promise<void>`



#### Parameters

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| `color` | `string` |             |
| `lng`   | `number` |             |
| `lat`   | `number` |             |

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
