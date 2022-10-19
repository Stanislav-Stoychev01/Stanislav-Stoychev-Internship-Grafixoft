USE FORUM

-- Requires topic and post to be created first--
IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES  WHERE TABLE_NAME = 'TOPIC_POST')
BEGIN
CREATE TABLE TOPIC_POST(
topic_id int, 
post_id int, 
CONSTRAINT POST_OF_TOPIC PRIMARY KEY(topic_id, post_id),
CONSTRAINT FK_POST_OF_TOPIC_TOPIC_ID FOREIGN KEY(topic_id) REFERENCES TOPIC(id) ON DELETE CASCADE,
CONSTRAINT FK_POST_OF_TOPIC_POST_ID FOREIGN KEY(post_id) REFERENCES POST(id) ON DELETE CASCADE)
END 