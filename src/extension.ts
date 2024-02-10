// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { ArithmeticExpressionEvaluator } from './ArithmeticExpressionEvaluator';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "calculatorforensak" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('calculatorforensak.calculatrice', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		let inputopts: vscode.InputBoxOptions = {
			title: "Calculatrice:"
		};
		vscode.window.showInputBox(inputopts).then((rslt) => {
			 if (rslt !== undefined){
				var op_result : number = new ArithmeticExpressionEvaluator().evaluate(rslt);
				if(ArithmeticExpressionEvaluator.INVALID_NUMBER !== op_result) {
					vscode.window.showInformationMessage(op_result.toString());
				
				} else {
					vscode.window.showInformationMessage("Opération non valide");
				}

			}
			else {
				vscode.window.showInformationMessage("Opération non valide");
			}
		});
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
