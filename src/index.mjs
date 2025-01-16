#!/usr/bin/env node

import { Command } from 'commander';
import { createPassword } from './scripts.mjs';
const program = new Command();


const ascii = ` ____               _              _ 
|  _ \\ __ _ ___ ___| |_ ___   ___ | |
| |_) / _\` / __/ __| __/ _ \\ / _ \\| |
|  __/ (_| \\__ \\__ \\ || (_) | (_) | |
|_|   \\__,_|___/___/\\__\\___/ \\___/|_|
`;

const printAscii = () => {
  console.log(ascii)
}


program
  .name('Pass Tool')
  .description('CLI to create strong passwords')
  .version('1.0.0')

program.command('create')
  .description('Create a passoword')
  .option('-s, --size <NUMBER>', 'Password size, default: 12', '12')
  .option('-c, --special-character', 'Use special characters')
  .action((options) => {
    printAscii();
    createPassword(options);
  });

program.parse();