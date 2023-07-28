all: config/restlettes.conf

config/restlettes.conf: config/environment/mongos.conf
	node ../build_restlettes.js config/json | sed -E 's/"mongo":\ *"(.*)"/"mongo":\ $$\{\1\}/g' > config/restlettes.conf


config/environment/mongos.conf:
	node ../build_mongos.js config/json content_management |  sed -E 's/"MONGO_URI"/$$\{\?MONGO_URI}/g' > config/environment/mongos.conf

clean:
	rm config/environment/mongos.conf
	rm config/restlettes.conf