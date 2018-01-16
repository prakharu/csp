import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import angular from 'rollup-plugin-angular';
import typescript from 'rollup-plugin-typescript';
var sass = require('node-sass');
var nameLibrary = 'test.index', PATH_SRC = './src/client/app/test/', PATH_DIST = './dist/bundle/';
//import { nameLibrary,PATH_SRC,PATH_DIST } from './tools/config/module.config';
export default {
    input: PATH_SRC + nameLibrary + '.ts',
    output: {
        name: nameLibrary,
        sourcemap:true,
        format: 'umd',
        file: PATH_DIST + nameLibrary + ".umd.js"
    },
    external: [
        '@angular/core',
    ],
    plugins: [
    angular(
        {
            preprocessors:{
                template:template => template,
                style: scss => {
                     let css;
                     if(scss){
                         css = sass.renderSync({ data: scss }).css.toString();
                     }else{
                          css = '';
                     }
                     return css;
                },
            }
        }
    ),
    typescript({
        typescript: require('typescript')
    }),
    resolve({
         module: true,
         main: true
    }),
    commonjs({
         include: 'node_modules/**',
    })
    ],
    onwarn: warning => {
         const skip_codes = [
         'THIS_IS_UNDEFINED',
         'MISSING_GLOBAL_NAME'
    ];
    if (skip_codes.indexOf(warning.code) != -1) return;
        console.error(warning);
    }
};