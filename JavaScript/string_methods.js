let tekerleme ="Bu tarlaya ekilen bir şinik kekere mekereye boz ala boz başlı pis porsuk dadanmış."
let result;

result = tekerleme.toLowerCase();
result = tekerleme.toUpperCase();
result = tekerleme.length;
result = tekerleme[3];
result = tekerleme.slice(0,6);
result = tekerleme.slice(6);
result = tekerleme.slice(-5);
result = tekerleme.slice(-5,-1);

result = tekerleme.substring(0,6);
result = tekerleme.substring(10);

result = tekerleme.replace("ala","koca");
result = tekerleme.trim();
result = tekerleme.trimEnd();
result = tekerleme.trimStart();

result = tekerleme.indexOf("boz");
result = tekerleme.split(" ");
result = tekerleme.split(" ")[1];
result = tekerleme.includes("porsuk");
result = tekerleme.includes("gergedan");










console.log(result);