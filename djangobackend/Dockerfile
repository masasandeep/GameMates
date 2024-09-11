FROM python:3.11.5-alpine3.17
ENV PYTHONUNBUFFERED=1
WORKDIR /django
COPY requirements.txt requirements.txt 
RUN pip install -r requirements.txt



#RUN chmod -R +x /opt/scripts