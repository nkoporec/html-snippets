
const htmlSnippets = require("./snippets/snippets.json");

class CompletionProvider {

	provideCompletionItems(editor, context) {
		let snippets = [];
		
		for (let snippet in htmlSnippets) {
			let item = new CompletionItem(htmlSnippets[snippet].prefix, CompletionItemKind.Tag);
			console.log(htmlSnippets[snippet].description);
	
			item.documentation = htmlSnippets[snippet].description;
			item.insertText = htmlSnippets[snippet].body;
			item.insertTextFormat = InsertTextFormat.Snippet;
			
			snippets.push(item)
		}
		
		return snippets;
	};
}


nova.assistants.registerCompletionAssistant("html", new CompletionProvider());
