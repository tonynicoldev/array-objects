let laptop = {
  cpu: 'i7',
  ram: 32,
  cores: 14,
  diskSize: 1,
  diskType: 'SSD',
  make: 'Dell'
}

// Also illustrates line continuation with \. Note: using \ within a string will break the string as shown
console.log(`My ${laptop.make} laptop is powered by an ${laptop.cpu} processor with \
${laptop.cores} cores. It has ${laptop.ram} GB 
RAM and ${laptop.diskSize} TB ${laptop.diskType} storage.`);

laptop.ram=64;
laptop['diskSize']=2; // There are times you need to use this but generally use the . version

console.log(`My upgraded ${laptop.make} laptop is powered by an ${laptop.cpu} processor with \
${laptop.cores} cores. It has ${laptop.ram} GB RAM and \
${laptop.diskSize} TB ${laptop.diskType} storage.`);

laptop.gpu = 'RTX-4060'; // Add what you want
delete laptop.make; // remove what you want

console.log('Laptop summary', JSON.stringify(laptop,null,2)); // format as json with 2 space indent
