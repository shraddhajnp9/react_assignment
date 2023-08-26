const template_msg_recreation = (params, template) => {
  try {
    let count = 0;
    for (const item of params.body) {
      count++;
      if (item.type === 'text') {
        template = template.replace(`{{${count}}}`, item.text);
        template = template.replace(/\*/g, '');
      }
    }
    return template;
  }
  catch(error) {
    return 'Pre-Approved Template Message';
  }

};

export default template_msg_recreation;