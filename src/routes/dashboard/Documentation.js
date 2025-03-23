import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Copy, Check, ChevronRight, Terminal, Code, Zap, Key, RefreshCw, BookOpen, FileText, Rocket } from 'lucide-react';
export const Route = createFileRoute('/dashboard/Documentation')({
    component: RouteComponent
});
function RouteComponent() {
    const [copied, setCopied] = useState(null);
    const [apiKey, setApiKey] = useState('sk_test_hashcode_51NcGZKLkqFAy5jZ');
    const [isGenerating, setIsGenerating] = useState(false);
    const handleCopy = (text, id) => {
        navigator.clipboard.writeText(text);
        setCopied(id);
        setTimeout(() => setCopied(null), 2000);
    };
    const generateNewKey = () => {
        setIsGenerating(true);
        setTimeout(() => {
            setApiKey(`sk_test_hashcode_${Math.random().toString(36).substring(2, 15)}`);
            setIsGenerating(false);
        }, 1000);
    };
    return (_jsxs("div", { className: "container mx-auto p-6", children: [_jsx("h1", { className: "mb-8 text-2xl font-bold", children: "Documentation" }), _jsxs("div", { className: "grid gap-6 md:grid-cols-3", children: [_jsxs(Card, { className: "md:col-span-2", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { className: "text-base font-medium", children: "Getting Started with Hashcode API" }), _jsx(CardDescription, { children: "Learn how to integrate Hashcode's MSISDN hash decoding service into your application" })] }), _jsx(CardContent, { children: _jsxs(Tabs, { defaultValue: "quickstart", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-3", children: [_jsx(TabsTrigger, { value: "quickstart", children: "Quick Start" }), _jsx(TabsTrigger, { value: "authentication", children: "Authentication" }), _jsx(TabsTrigger, { value: "examples", children: "Code Examples" })] }), _jsxs(TabsContent, { value: "quickstart", className: "space-y-6 pt-6", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("h3", { className: "text-lg font-semibold", children: "Welcome to Hashcode" }), _jsx("p", { className: "text-muted-foreground", children: "Hashcode transforms M-Pesa MSISDN hashes into clear numbers, allowing you to process transactions securely while maintaining compliance with data protection regulations." })] }), _jsxs("div", { className: "space-y-2", children: [_jsxs("h4", { className: "font-medium flex items-center", children: [_jsx(Rocket, { className: "mr-2 h-4 w-4 text-indigo-600" }), "Step 1: Generate an API Key"] }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Create an API key in the dashboard to authenticate your requests." }), _jsx("div", { className: "rounded-md bg-muted p-4", children: _jsxs("code", { className: "text-sm", children: ["Your API keys can be found in the sidebar under", ' ', _jsx("strong", { children: "API Keys" }), "."] }) })] }), _jsxs("div", { className: "space-y-2", children: [_jsxs("h4", { className: "font-medium flex items-center", children: [_jsx(Terminal, { className: "mr-2 h-4 w-4 text-indigo-600" }), "Step 2: Install the SDK"] }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Install our SDK using npm, yarn, or pnpm." }), _jsxs("div", { className: "relative rounded-md bg-zinc-950 p-4", children: [_jsx(Button, { variant: "ghost", size: "icon", className: "absolute right-2 top-2 h-6 w-6 text-zinc-400 hover:text-zinc-100", onClick: () => handleCopy('npm install @hashcode/sdk', 'install'), children: copied === 'install' ? (_jsx(Check, { className: "h-3.5 w-3.5" })) : (_jsx(Copy, { className: "h-3.5 w-3.5" })) }), _jsx("pre", { className: "text-sm text-zinc-100", children: _jsx("code", { children: "npm install @hashcode/sdk" }) })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsxs("h4", { className: "font-medium flex items-center", children: [_jsx(Code, { className: "mr-2 h-4 w-4 text-indigo-600" }), "Step 3: Make Your First API Call"] }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Decode your first MSISDN hash with a simple API call." }), _jsxs("div", { className: "relative rounded-md bg-zinc-950 p-4", children: [_jsx(Button, { variant: "ghost", size: "icon", className: "absolute right-2 top-2 h-6 w-6 text-zinc-400 hover:text-zinc-100", onClick: () => handleCopy(`import { Hashcode } from '@hashcode/sdk';

const hashcode = new Hashcode('${apiKey}');

// Decode a single hash
const result = await hashcode.decode('5f4dcc3b5aa765d61d8327deb882cf99');
console.log(result.msisdn); // +254712345678`, 'decode'), children: copied === 'decode' ? (_jsx(Check, { className: "h-3.5 w-3.5" })) : (_jsx(Copy, { className: "h-3.5 w-3.5" })) }), _jsx("pre", { className: "text-sm text-zinc-100", children: _jsx("code", { children: `import { Hashcode } from '@hashcode/sdk';

const hashcode = new Hashcode('${apiKey.substring(0, 10)}...');

// Decode a single hash
const result = await hashcode.decode('5f4dcc3b5aa765d61d8327deb882cf99');
console.log(result.msisdn); // +254712345678` }) })] })] }), _jsx("div", { className: "flex justify-end", children: _jsxs(Button, { className: "gap-1", children: ["Read Full Documentation", _jsx(ChevronRight, { className: "h-4 w-4" })] }) })] }), _jsxs(TabsContent, { value: "authentication", className: "space-y-6 pt-6", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("h3", { className: "text-lg font-semibold", children: "Authentication" }), _jsx("p", { className: "text-muted-foreground", children: "Hashcode uses API keys to authenticate requests. You can view and manage your API keys in the dashboard." })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("h4", { className: "font-medium", children: "API Key Types" }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-start space-x-3", children: [_jsx("div", { className: "mt-0.5 rounded-full bg-green-100 p-1", children: _jsx(Key, { className: "h-4 w-4 text-green-600" }) }), _jsxs("div", { children: [_jsx("p", { className: "font-medium", children: "Production Keys" }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Use these for your production environment. These keys have access to real data and will incur charges." })] })] }), _jsxs("div", { className: "flex items-start space-x-3", children: [_jsx("div", { className: "mt-0.5 rounded-full bg-amber-100 p-1", children: _jsx(Key, { className: "h-4 w-4 text-amber-600" }) }), _jsxs("div", { children: [_jsx("p", { className: "font-medium", children: "Test Keys" }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Use these for testing and development. These keys only work with test data and don't incur charges." })] })] })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("h4", { className: "font-medium", children: "Authentication Examples" }), _jsxs("div", { className: "relative rounded-md bg-zinc-950 p-4", children: [_jsx(Button, { variant: "ghost", size: "icon", className: "absolute right-2 top-2 h-6 w-6 text-zinc-400 hover:text-zinc-100", onClick: () => handleCopy(`// Using API Key in HTTP Header
fetch('https://api.hashcode.dev/v1/decode', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ${apiKey}'
  },
  body: JSON.stringify({
    hash: '5f4dcc3b5aa765d61d8327deb882cf99'
  })
})`, 'auth-http'), children: copied === 'auth-http' ? (_jsx(Check, { className: "h-3.5 w-3.5" })) : (_jsx(Copy, { className: "h-3.5 w-3.5" })) }), _jsx("pre", { className: "text-sm text-zinc-100", children: _jsx("code", { children: `// Using API Key in HTTP Header
fetch('https://api.hashcode.dev/v1/decode', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ${apiKey.substring(0, 10)}...'
  },
  body: JSON.stringify({
    hash: '5f4dcc3b5aa765d61d8327deb882cf99'
  })
})` }) })] }), _jsxs("div", { className: "relative rounded-md bg-zinc-950 p-4 mt-4", children: [_jsx(Button, { variant: "ghost", size: "icon", className: "absolute right-2 top-2 h-6 w-6 text-zinc-400 hover:text-zinc-100", onClick: () => handleCopy(`// Using SDK with API Key
import { Hashcode } from '@hashcode/sdk';

const hashcode = new Hashcode('${apiKey}');

// Now you can make authenticated requests
const result = await hashcode.decode('5f4dcc3b5aa765d61d8327deb882cf99');`, 'auth-sdk'), children: copied === 'auth-sdk' ? (_jsx(Check, { className: "h-3.5 w-3.5" })) : (_jsx(Copy, { className: "h-3.5 w-3.5" })) }), _jsx("pre", { className: "text-sm text-zinc-100", children: _jsx("code", { children: `// Using SDK with API Key
import { Hashcode } from '@hashcode/sdk';

const hashcode = new Hashcode('${apiKey.substring(0, 10)}...');

// Now you can make authenticated requests
const result = await hashcode.decode('5f4dcc3b5aa765d61d8327deb882cf99');` }) })] })] }), _jsx("div", { className: "rounded-md border border-amber-200 bg-amber-50 p-4", children: _jsxs("div", { className: "flex", children: [_jsx("div", { className: "flex-shrink-0", children: _jsx(Key, { className: "h-5 w-5 text-amber-400" }) }), _jsxs("div", { className: "ml-3", children: [_jsx("h3", { className: "text-sm font-medium text-amber-800", children: "Keep Your API Keys Secure" }), _jsx("div", { className: "mt-2 text-sm text-amber-700", children: _jsx("p", { children: "Your API keys carry many privileges, so be sure to keep them secure! Do not share your API keys in publicly accessible areas such as GitHub, client-side code, etc." }) })] })] }) })] }), _jsxs(TabsContent, { value: "examples", className: "space-y-6 pt-6", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("h3", { className: "text-lg font-semibold", children: "Code Examples" }), _jsx("p", { className: "text-muted-foreground", children: "Learn how to use Hashcode API with these code examples in different programming languages." })] }), _jsxs(Tabs, { defaultValue: "javascript", children: [_jsxs(TabsList, { className: "w-full", children: [_jsx(TabsTrigger, { value: "javascript", children: "JavaScript" }), _jsx(TabsTrigger, { value: "python", children: "Python" }), _jsx(TabsTrigger, { value: "php", children: "PHP" }), _jsx(TabsTrigger, { value: "java", children: "Java" })] }), _jsx(TabsContent, { value: "javascript", className: "pt-4", children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("h4", { className: "font-medium", children: "Decode a Single Hash" }), _jsxs("div", { className: "relative rounded-md bg-zinc-950 p-4", children: [_jsx(Button, { variant: "ghost", size: "icon", className: "absolute right-2 top-2 h-6 w-6 text-zinc-400 hover:text-zinc-100", onClick: () => handleCopy(`import { Hashcode } from '@hashcode/sdk';

const hashcode = new Hashcode('${apiKey}');

async function decodeSingleHash() {
  try {
    const result = await hashcode.decode('5f4dcc3b5aa765d61d8327deb882cf99');
    console.log('Decoded MSISDN:', result.msisdn);
  } catch (error) {
    console.error('Error decoding hash:', error);
  }
}

decodeSingleHash();`, 'js-single'), children: copied === 'js-single' ? (_jsx(Check, { className: "h-3.5 w-3.5" })) : (_jsx(Copy, { className: "h-3.5 w-3.5" })) }), _jsx("pre", { className: "text-sm text-zinc-100", children: _jsx("code", { children: `import { Hashcode } from '@hashcode/sdk';

const hashcode = new Hashcode('${apiKey.substring(0, 10)}...');

async function decodeSingleHash() {
  try {
    const result = await hashcode.decode('5f4dcc3b5aa765d61d8327deb882cf99');
    console.log('Decoded MSISDN:', result.msisdn);
  } catch (error) {
    console.error('Error decoding hash:', error);
  }
}

decodeSingleHash();` }) })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("h4", { className: "font-medium", children: "Batch Decode Multiple Hashes" }), _jsxs("div", { className: "relative rounded-md bg-zinc-950 p-4", children: [_jsx(Button, { variant: "ghost", size: "icon", className: "absolute right-2 top-2 h-6 w-6 text-zinc-400 hover:text-zinc-100", onClick: () => handleCopy(`import { Hashcode } from '@hashcode/sdk';

const hashcode = new Hashcode('${apiKey}');

async function decodeBatchHashes() {
  try {
    const hashes = [
      '5f4dcc3b5aa765d61d8327deb882cf99',
      '7c6a180b36896a0a8c02787eeafb0e4c',
      '6cb75f652a9b52798eb6cf2201057c73'
    ];

    const results = await hashcode.decodeBatch(hashes);

    results.forEach(result => {
      console.log(\`Hash: \${result.hash} -> MSISDN: \${result.msisdn}\`);
    });
  } catch (error) {
    console.error('Error decoding hashes:', error);
  }
}

decodeBatchHashes();`, 'js-batch'), children: copied === 'js-batch' ? (_jsx(Check, { className: "h-3.5 w-3.5" })) : (_jsx(Copy, { className: "h-3.5 w-3.5" })) }), _jsx("pre", { className: "text-sm text-zinc-100", children: _jsx("code", { children: `import { Hashcode } from '@hashcode/sdk';

const hashcode = new Hashcode('${apiKey.substring(0, 10)}...');

async function decodeBatchHashes() {
  try {
    const hashes = [
      '5f4dcc3b5aa765d61d8327deb882cf99',
      '7c6a180b36896a0a8c02787eeafb0e4c',
      '6cb75f652a9b52798eb6cf2201057c73'
    ];

    const results = await hashcode.decodeBatch(hashes);

    results.forEach(result => {
      console.log(\`Hash: \${result.hash} -> MSISDN: \${result.msisdn}\`);
    });
  } catch (error) {
    console.error('Error decoding hashes:', error);
  }
}

decodeBatchHashes();` }) })] })] })] }) }), _jsx(TabsContent, { value: "python", className: "pt-4", children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("h4", { className: "font-medium", children: "Decode a Single Hash" }), _jsxs("div", { className: "relative rounded-md bg-zinc-950 p-4", children: [_jsx(Button, { variant: "ghost", size: "icon", className: "absolute right-2 top-2 h-6 w-6 text-zinc-400 hover:text-zinc-100", onClick: () => handleCopy(`from hashcode import Hashcode

# Initialize the client with your API key
hashcode = Hashcode('${apiKey}')

# Decode a single hash
try:
    result = hashcode.decode('5f4dcc3b5aa765d61d8327deb882cf99')
    print(f"Decoded MSISDN: {result['msisdn']}")
except Exception as e:
    print(f"Error decoding hash: {e}")`, 'py-single'), children: copied === 'py-single' ? (_jsx(Check, { className: "h-3.5 w-3.5" })) : (_jsx(Copy, { className: "h-3.5 w-3.5" })) }), _jsx("pre", { className: "text-sm text-zinc-100", children: _jsx("code", { children: `from hashcode import Hashcode

# Initialize the client with your API key
hashcode = Hashcode('${apiKey.substring(0, 10)}...')

# Decode a single hash
try:
    result = hashcode.decode('5f4dcc3b5aa765d61d8327deb882cf99')
    print(f"Decoded MSISDN: {result['msisdn']}")
except Exception as e:
    print(f"Error decoding hash: {e}")` }) })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("h4", { className: "font-medium", children: "Batch Decode Multiple Hashes" }), _jsxs("div", { className: "relative rounded-md bg-zinc-950 p-4", children: [_jsx(Button, { variant: "ghost", size: "icon", className: "absolute right-2 top-2 h-6 w-6 text-zinc-400 hover:text-zinc-100", onClick: () => handleCopy(`from hashcode import Hashcode

# Initialize the client with your API key
hashcode = Hashcode('${apiKey}')

# Decode multiple hashes in batch
try:
    hashes = [
        '5f4dcc3b5aa765d61d8327deb882cf99',
        '7c6a180b36896a0a8c02787eeafb0e4c',
        '6cb75f652a9b52798eb6cf2201057c73'
    ]

    results = hashcode.decode_batch(hashes)

    for result in results:
        print(f"Hash: {result['hash']} -> MSISDN: {result['msisdn']}")
except Exception as e:
    print(f"Error decoding hashes: {e}")`, 'py-batch'), children: copied === 'py-batch' ? (_jsx(Check, { className: "h-3.5 w-3.5" })) : (_jsx(Copy, { className: "h-3.5 w-3.5" })) }), _jsx("pre", { className: "text-sm text-zinc-100", children: _jsx("code", { children: `from hashcode import Hashcode

# Initialize the client with your API key
hashcode = Hashcode('${apiKey.substring(0, 10)}...')

# Decode multiple hashes in batch
try:
    hashes = [
        '5f4dcc3b5aa765d61d8327deb882cf99',
        '7c6a180b36896a0a8c02787eeafb0e4c',
        '6cb75f652a9b52798eb6cf2201057c73'
    ]

    results = hashcode.decode_batch(hashes)

    for result in results:
        print(f"Hash: {result['hash']} -> MSISDN: {result['msisdn']}")
except Exception as e:
    print(f"Error decoding hashes: {e}")` }) })] })] })] }) }), _jsx(TabsContent, { value: "php", className: "pt-4", children: _jsxs("div", { className: "space-y-2", children: [_jsx("h4", { className: "font-medium", children: "Using the Hashcode PHP SDK" }), _jsxs("div", { className: "relative rounded-md bg-zinc-950 p-4", children: [_jsx(Button, { variant: "ghost", size: "icon", className: "absolute right-2 top-2 h-6 w-6 text-zinc-400 hover:text-zinc-100", onClick: () => handleCopy(`<?php
require_once 'vendor/autoload.php';

use Hashcode\\HashcodeClient;

// Initialize the client with your API key
$hashcode = new HashcodeClient('${apiKey}');

// Decode a single hash
try {
    $result = $hashcode->decode('5f4dcc3b5aa765d61d8327deb882cf99');
    echo "Decoded MSISDN: " . $result['msisdn'] . "\\n";
} catch (Exception $e) {
    echo "Error decoding hash: " . $e->getMessage() . "\\n";
}

// Decode multiple hashes in batch
try {
    $hashes = [
        '5f4dcc3b5aa765d61d8327deb882cf99',
        '7c6a180b36896a0a8c02787eeafb0e4c',
        '6cb75f652a9b52798eb6cf2201057c73'
    ];

    $results = $hashcode->decodeBatch($hashes);

    foreach ($results as $result) {
        echo "Hash: " . $result['hash'] . " -> MSISDN: " . $result['msisdn'] . "\\n";
    }
} catch (Exception $e) {
    echo "Error decoding hashes: " . $e->getMessage() . "\\n";
}`, 'php-example'), children: copied === 'php-example' ? (_jsx(Check, { className: "h-3.5 w-3.5" })) : (_jsx(Copy, { className: "h-3.5 w-3.5" })) }), _jsx("pre", { className: "text-sm text-zinc-100", children: _jsx("code", { children: `<?php
require_once 'vendor/autoload.php';

use Hashcode\\HashcodeClient;

// Initialize the client with your API key
$hashcode = new HashcodeClient('${apiKey.substring(0, 10)}...');

// Decode a single hash
try {
    $result = $hashcode->decode('5f4dcc3b5aa765d61d8327deb882cf99');
    echo "Decoded MSISDN: " . $result['msisdn'] . "\\n";
} catch (Exception $e) {
    echo "Error decoding hash: " . $e->getMessage() . "\\n";
}

// Decode multiple hashes in batch
try {
    $hashes = [
        '5f4dcc3b5aa765d61d8327deb882cf99',
        '7c6a180b36896a0a8c02787eeafb0e4c',
        '6cb75f652a9b52798eb6cf2201057c73'
    ];

    $results = $hashcode->decodeBatch($hashes);

    foreach ($results as $result) {
        echo "Hash: " . $result['hash'] . " -> MSISDN: " . $result['msisdn'] . "\\n";
    }
} catch (Exception $e) {
    echo "Error decoding hashes: " . $e->getMessage() . "\\n";
}` }) })] })] }) }), _jsx(TabsContent, { value: "java", className: "pt-4", children: _jsxs("div", { className: "space-y-2", children: [_jsx("h4", { className: "font-medium", children: "Using the Hashcode Java SDK" }), _jsxs("div", { className: "relative rounded-md bg-zinc-950 p-4", children: [_jsx(Button, { variant: "ghost", size: "icon", className: "absolute right-2 top-2 h-6 w-6 text-zinc-400 hover:text-zinc-100", onClick: () => handleCopy(`import dev.hashcode.HashcodeClient;
import dev.hashcode.models.DecodeResult;
import java.util.Arrays;
import java.util.List;

public class HashcodeExample {
    public static void main(String[] args) {
        // Initialize the client with your API key
        HashcodeClient hashcode = new HashcodeClient("${apiKey}");

        // Decode a single hash
        try {
            DecodeResult result = hashcode.decode("5f4dcc3b5aa765d61d8327deb882cf99");
            System.out.println("Decoded MSISDN: " + result.getMsisdn());
        } catch (Exception e) {
            System.err.println("Error decoding hash: " + e.getMessage());
        }

        // Decode multiple hashes in batch
        try {
            List<String> hashes = Arrays.asList(
                "5f4dcc3b5aa765d61d8327deb882cf99",
                "7c6a180b36896a0a8c02787eeafb0e4c",
                "6cb75f652a9b52798eb6cf2201057c73"
            );

            List<DecodeResult> results = hashcode.decodeBatch(hashes);

            for (DecodeResult result : results) {
                System.out.println("Hash: " + result.getHash() + " -> MSISDN: " + result.getMsisdn());
            }
        } catch (Exception e) {
            System.err.println("Error decoding hashes: " + e.getMessage());
        }
    }
}`, 'java-example'), children: copied === 'java-example' ? (_jsx(Check, { className: "h-3.5 w-3.5" })) : (_jsx(Copy, { className: "h-3.5 w-3.5" })) }), _jsx("pre", { className: "text-sm text-zinc-100", children: _jsx("code", { children: `import dev.hashcode.HashcodeClient;
import dev.hashcode.models.DecodeResult;
import java.util.Arrays;
import java.util.List;

public class HashcodeExample {
    public static void main(String[] args) {
        // Initialize the client with your API key
        HashcodeClient hashcode = new HashcodeClient("${apiKey.substring(0, 10)}...");

        // Decode a single hash
        try {
            DecodeResult result = hashcode.decode("5f4dcc3b5aa765d61d8327deb882cf99");
            System.out.println("Decoded MSISDN: " + result.getMsisdn());
        } catch (Exception e) {
            System.err.println("Error decoding hash: " + e.getMessage());
        }

        // Decode multiple hashes in batch
        try {
            List<String> hashes = Arrays.asList(
                "5f4dcc3b5aa765d61d8327deb882cf99",
                "7c6a180b36896a0a8c02787eeafb0e4c",
                "6cb75f652a9b52798eb6cf2201057c73"
            );

            List<DecodeResult> results = hashcode.decodeBatch(hashes);

            for (DecodeResult result : results) {
                System.out.println("Hash: " + result.getHash() + " -> MSISDN: " + result.getMsisdn());
            }
        } catch (Exception e) {
            System.err.println("Error decoding hashes: " + e.getMessage());
        }
    }
}` }) })] })] }) })] })] })] }) })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { className: "text-base font-medium", children: "API Keys" }), _jsx(CardDescription, { children: "Manage your API keys for authentication" })] }), _jsxs(CardContent, { className: "space-y-6", children: [_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h3", { className: "text-sm font-medium", children: "Test API Key" }), _jsxs(Button, { variant: "outline", size: "sm", className: "h-8 gap-1", onClick: generateNewKey, disabled: isGenerating, children: [isGenerating ? (_jsx(RefreshCw, { className: "mr-1 h-3.5 w-3.5 animate-spin" })) : (_jsx(RefreshCw, { className: "mr-1 h-3.5 w-3.5" })), "Regenerate"] })] }), _jsx("div", { className: "flex items-center space-x-2", children: _jsxs("div", { className: "relative flex-1", children: [_jsx(Input, { value: apiKey, readOnly: true, className: "pr-10 font-mono text-sm" }), _jsx(Button, { variant: "ghost", size: "icon", className: "absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-gray-600", onClick: () => handleCopy(apiKey, 'api-key'), children: copied === 'api-key' ? (_jsx(Check, { className: "h-4 w-4" })) : (_jsx(Copy, { className: "h-4 w-4" })) })] }) }), _jsx("div", { className: "rounded-md bg-muted p-3 text-sm text-muted-foreground", children: _jsx("p", { children: "This key can only be used in the test environment." }) })] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h3", { className: "text-sm font-medium", children: "Production API Key" }), _jsx(Button, { variant: "outline", size: "sm", className: "h-8", children: "Request Production Key" })] }), _jsxs("div", { className: "rounded-md border border-dashed p-6 text-center", children: [_jsx(Key, { className: "mx-auto h-8 w-8 text-gray-400" }), _jsx("h3", { className: "mt-2 text-sm font-medium", children: "No Production Key" }), _jsx("p", { className: "mt-1 text-xs text-gray-500", children: "Contact our team to get a production API key" })] })] }), _jsxs("div", { className: "flex flex-col space-y-2", children: [_jsx(Button, { variant: "default", className: "w-full", children: "View API Documentation" }), _jsx(Button, { variant: "outline", className: "w-full", children: "Contact Support" })] })] })] })] }), _jsxs("div", { className: "mt-6 grid gap-6 md:grid-cols-3", children: [_jsxs(Card, { className: "flex flex-col items-center justify-center p-6 text-center", children: [_jsx("div", { className: "rounded-full bg-indigo-100 p-3", children: _jsx(BookOpen, { className: "h-6 w-6 text-indigo-600" }) }), _jsx("h3", { className: "mt-4 text-lg font-semibold", children: "API Reference" }), _jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Explore our complete API reference documentation" }), _jsx(Button, { variant: "outline", className: "mt-4", children: "View API Reference" })] }), _jsxs(Card, { className: "flex flex-col items-center justify-center p-6 text-center", children: [_jsx("div", { className: "rounded-full bg-indigo-100 p-3", children: _jsx(FileText, { className: "h-6 w-6 text-indigo-600" }) }), _jsx("h3", { className: "mt-4 text-lg font-semibold", children: "Tutorials" }), _jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Step-by-step guides to help you integrate Hashcode" }), _jsx(Button, { variant: "outline", className: "mt-4", children: "View Tutorials" })] }), _jsxs(Card, { className: "flex flex-col items-center justify-center p-6 text-center", children: [_jsx("div", { className: "rounded-full bg-indigo-100 p-3", children: _jsx(Zap, { className: "h-6 w-6 text-indigo-600" }) }), _jsx("h3", { className: "mt-4 text-lg font-semibold", children: "Sample Projects" }), _jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Download sample projects to jumpstart your integration" }), _jsx(Button, { variant: "outline", className: "mt-4", children: "View Samples" })] })] })] }));
}
