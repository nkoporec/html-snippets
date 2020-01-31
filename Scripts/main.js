
const htmlSnippets = require('./snippets/snippets.json');

class CompletionProvider {

	provideCompletionItems(editor, context) {
		let snippets = [];
		
		for (let snippet in htmlSnippets) {
			let item = new CompletionItem(htmlSnippets[snippet].prefix, CompletionItemKind.File);
            console.log(htmlSnippets[snippet].description);
	
			item.documentation = htmlSnippets[snippet].description;
			item.insertText = htmlSnippets[snippet].body;
			item.tokenize = true;
			
			snippets.push(item)
		}
		
		return snippets;
	};
}


nova.assistants.registerCompletionAssistant("html", new CompletionProvider());
